<script>
    import {buttons} from './Lets.js';

    let textInput = '';
    let previousAction = '';
    let operator = [];
    let dots = 0;
    let splitedTextInput = [];

    const inputContentAfterInput = (e) => {
        if ((e.target.innerText === '=')) {

            previousAction = textInput
            console.log(textInput)

            const lookingDots = (arr) => {
                splitedTextInput = textInput.split('');
                if (arr[1] === '.' && arr[2] === '.') {
                    textInput = 'press AC, please'
                }
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === '.') {
                        dots += 1
                        if (dots > 2) {
                            textInput = 'press AC, please'
                        }
                    }
                }
            }

            const lookingForAnOperator = (arr) => {
                for (let i = 0; i < arr.length; i++) {
                    if (isNaN(arr[i]) && arr[i] !== '.') {
                        operator = [...operator, arr[i]];
                        if (operator.length > 1) {
                            textInput = 'press AC, please'
                        } else {
                            operator = operator[0];
                        }
                    }
                }
            }

            lookingDots(splitedTextInput)
            lookingForAnOperator(splitedTextInput)
            console.log(operator)

            splitedTextInput = textInput.split(operator);
            console.log(splitedTextInput)

            textInput =
                isNaN(splitedTextInput[0]) || isNaN(splitedTextInput[1]) ? 'press AC, please'
                    : splitedTextInput.length === 1 ? splitedTextInput[0]
                        : splitedTextInput.length > 2 ? 'press AC, please'
                            : operator === '/' && splitedTextInput[1] === '0' ? 'press AC, please'
                                : operator === '*' && !Number(splitedTextInput[1]) ? splitedTextInput[0]
                                    : operator === '/' && !Number(splitedTextInput[1]) ? splitedTextInput[0]
                                        : operator === '/' ? Number(splitedTextInput[0]) / Number(splitedTextInput[1])
                                            : operator === '*' ? Number(splitedTextInput[0]) * Number(splitedTextInput[1])
                                                : operator === '+' ? Number(splitedTextInput[0]) + Number(splitedTextInput[1])
                                                    : operator === '-' ? Number(splitedTextInput[0]) - Number(splitedTextInput[1])
                                                        : 'press AC, please'

            console.log(previousAction, isNaN(splitedTextInput[1]))
            operator = ''

        } else if (e.target.innerText === 'AC') {
            textInput = '';
            previousAction = '';
        } else {
            textInput = String(textInput) + String(e.target.innerText)
            console.log(typeof textInput, textInput, e)
            if((textInput.split('')[0] === '0' && textInput.split('')[1] === '0') || (isNaN(textInput.split('')[0]))){
                console.log(textInput.split('')[0])
                textInput = 'press AC, please'
            }
        }
    }

</script>

<div>
    <input type="text" value={previousAction}>
    <input type="text" value={textInput}>
    <ul>
        {#each buttons as button, i}
            <li key={button.id}>
                <button on:click={inputContentAfterInput}>
                    {button.text}</button>
            </li>
        {/each}
    </ul>
</div>

<style>

    input {
        display: block;
        padding: 1rem;
        height: 2rem;
        margin-bottom: .3rem;
        font-size: 1.5rem;
        border: none;
        box-shadow: 0 0 6px;
        outline: transparent;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: .2rem;
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }

    li:nth-child(16) {
        grid-column: 1/4;
    }

    li:nth-child(17) {
        grid-column: 4/6;
    }

    button {
        width: 100%;
        height: 4rem;
        font-size: 2rem;
        border-radius: 10%;
        border: none;
        box-shadow: 0 0 6px;
    }

    button:active {
        background-color: rgba(255, 100, 100, .2);
    }
</style>