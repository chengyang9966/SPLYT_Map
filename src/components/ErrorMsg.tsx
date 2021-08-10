const ErrorMsg=(children:string|undefined)=>{
    return(
        children? <div className="errorText" children={children}/>: <div className="errorTextSpacing" children={children}/>
    )
}

export default ErrorMsg