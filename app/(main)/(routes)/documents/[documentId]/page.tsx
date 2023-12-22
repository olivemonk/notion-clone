'use client';

import ToolBar from "@/components/toolbar";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";

interface DocumentIdPageProps {
    params: {
        documentId: Id<'documents'>
    }
}

const DocumentIdPage = ({params}:DocumentIdPageProps) => {

    const document = useQuery(api.documents.getById, {
        documentId: params.documentId
    })

    if(document === undefined){
        return (<div>
            loading
        </div>)
    }

    if(document === null){
        return (
            <div>
                Not found
            </div>
        )
    }

    return ( 
        <div className="pb-40">
            <div className="h-[35vh]"/>
            <div className="md:max-3xl lg:max-w-4xl mx-auto">
                <ToolBar initialData={document} />
            </div>
        </div>
     );
}
 
export default DocumentIdPage;