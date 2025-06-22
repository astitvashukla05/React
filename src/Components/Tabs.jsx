export default function Tabs({children,buttons,buttonsContainer,...props}){
    const ButtonsContainer=buttonsContainer
    return(
         <>
        <ButtonsContainer>
        {buttons}
    </ButtonsContainer>
        <div {...props}>
        {children}
        </div>
        </>
    )

}

 