export default function Button({children,textOnly,className,...props}){
   const  cssClass=textOnly===true?`${className} text-button`:`${className} button`;
    return(<button className={cssClass} {...props}>{children}</button>)
}