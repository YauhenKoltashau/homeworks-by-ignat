import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>,value: string) => {
        if(onChangeOption){
            onChangeOption(value)
        }
        if(onChange){
            onChange(e)
        }

        // console.log(e.currentTarget.checked,value)


        // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => {
        return ( // map options with key
        <label key={name + '-' + i}>
            <input onChange={(e)=>onChangeCallback(e,o)}
                   value={value}
                   type={'radio'}
                   checked={value === o}
                   {...restProps}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )}) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
