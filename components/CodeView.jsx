import { useEffect } from "react";
import Prism from "../components/prism";
import { useToast } from "../components/ToastProvider";


const CodeView = ({ code, language = "javascript" }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    code = filterCode(code);

    return (
        <div className="relative text-white rounded-lg overflow-hidden my-4">
             <CopyButton code={code} />
            <pre className={`language-${language} styled-scroll`} style={{ borderRadius: "8px", overflowX: "auto", whiteSpace: "pre-line" }} >
               
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    );
};

function filterCode(code){
    code = code.replace(/&gt;/g, "<");
    code = code.replace(/&lt;/g, ">");
    code = code.replace(/\\\\/g, '\\');
    code = code.replace(/<br>/g, '\n')
    code = code.replace(/\\n/g, '\n');
    return code;

}

export function CopyButton({code}){
    const addToast = useToast();

    const copy = () => {
        navigator.clipboard.writeText(code);
        addToast("Copiado!", "info")
    };

    return (
        <button className="absolute top-4 right-2 bg-gray-700 hover:bg-gray-600 text-sm text-white py-1 px-3 rounded shadow-md transition-colors flex justify-center align-center"
        onClick={copy}>
            <span className="material-icons">content_copy</span>
        </button>
    )
}

export default CodeView;