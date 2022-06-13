import * as React from "react"
import {useForm} from "@formspree/react"
import { Form as FormStyled } from "./formView";
import { graphql, useStaticQuery } from "gatsby";

const Form = () => {
    const query = useStaticQuery(graphql`
    {
        prismicForm {
          data {
            body {
              ... on PrismicFormDataBodyForm {
                id
                primary {
                  form_endpoint
                }
                slice_type
                items {
                  placeholder
                  is_required
                  input_type
                }
              }
            }
          }
        }
      }
      
    `)

    const result = query.prismicForm.data.body[0]
    
    const [state, handleSubmit] = useForm(result.primary.form_endpoint)

    if(state.succeeded){
        return <div>Thank you! We contact you shortly</div>
    }

    return (
        <>
        <FormStyled.Wrapper onSubmit={handleSubmit}>
            {result.items.map((item, i) => {
                if(item.input_type ==="textarea"){
                    return (
                    <textarea 
                        key={i} 
                        placeholder={item.placeholder} 
                        name={item.placeholder}
                        required={item.is_required}    
                    />
                    )
                }
                return (
                <FormStyled.Input 
                    key={i} 
                    placeholder={item.placeholder} 
                    type={item.input_type} 
                    name={item.placeholder} 
                    required={item.is_required} 
                />
                )
            })}
            <FormStyled.Button type="submit" disabled={state.submitting}>Submit</FormStyled.Button>
        </FormStyled.Wrapper>
        </>
    )
}

export default Form