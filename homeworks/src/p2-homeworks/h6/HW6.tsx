import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import styles from './HW6.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')
    const [nameHW6, setNameHW6]=useState('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
         setValue(restoreState<string>('editable-span-value',value))
    }

    return (
        <div>
            <hr/>
            <div>

                <SuperEditableSpan
                    value={nameHW6}
                    onChangeText={setNameHW6}
                    spanProps={{children: nameHW6 ? undefined : 'homeworks 6'}}
                    className={styles.inputStyle}
                    spanClassName={styles.spanStyle}/>


            </div>


            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
