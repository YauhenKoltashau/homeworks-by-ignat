import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    console.log(restProps)
    const mappedOptions: any[] = options
        ? options.map((o,i)=>{
        return(
            <>
                <option key={i}>{o}</option>
            </>
        )
    })
        :[]; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
            if (onChangeOption) {
                onChangeOption(e.currentTarget.value)
            }
            if (onChange){
                onChange(e)
            }



        // onChange, onChangeOption
    }
    return (
        <select onChange={onChangeCallback} value={restProps.value} {...restProps.value}>

            {mappedOptions}
        </select>
    )
}

export default SuperSelect
