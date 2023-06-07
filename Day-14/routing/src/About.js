import { useParams } from "react-router-dom";

const About = () => {
    const { mc } = useParams();
    return (
        <h3>You're in About: {mc}</h3>
    )
}

export default About;