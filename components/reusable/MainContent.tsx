
interface MainHeadingProps {
    children: React.ReactNode
}

const MainContent = ({children}: MainHeadingProps) => {
    return (
       <div className="space-y-8">
            {children}
       </div>
    )
}

export default MainContent;