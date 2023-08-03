import { useParams } from "react-router-dom";

export default function Contact() {
    let params = useParams();
    console.log(params.id);
    return (
        <h1>Je suis dans la page contact</h1>
    )
}