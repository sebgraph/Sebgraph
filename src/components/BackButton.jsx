import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from './Button'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import ThemeContext from '../context/ThemeContext'

const BackButton = () => {
    const { theme } = useContext(ThemeContext)
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <Button
            className={`back-btn ${theme}`}
            onClick={goBack}
            type="button"
            buttonStyle="btn--secondary"
            buttonSize="btn--md"
            iconLeft={<ArrowLeftIcon />}
            fixedPosition={true}
        >
            Back
        </Button>
    )
}

export default BackButton
