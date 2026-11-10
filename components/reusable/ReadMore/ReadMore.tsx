import { useState } from "react";

interface ReadMoreProps{
    content: string;
}

const MAX_TRUNCATE: number = 129

const ReadMore = ({content}: ReadMoreProps) => {
    
    const [readMore, setReadMore] = useState<boolean>(false)

    const truncatedContent: string = readMore ? content.substring(0, MAX_TRUNCATE) : content

    return (
        <p className="text-sm text-zinc-400 max-w-2xl">
            {truncatedContent}{' '}
            <button onClick={() => setReadMore((curr) => !curr)} className="text-indigo-400 hover:underline font-medium inline-flex items-center">
                {readMore ? "Show less" : "Read more"}
            </button>
        </p>
    )

}

export default ReadMore;