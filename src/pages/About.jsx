import Layout from '../components/Layout';

const About = () => {
    return (
        <Layout title="About Me">
            <p>
                Hello, I'm McNair Shah. I'm currently on leave from Carnegie Mellon University doing an Anthropic Fellowship. I'm interested in mechanistic interpretability, AI safety, math, physics, and many other things.
            </p>
            <p style={{ marginTop: '1rem' }}>
                You can reach me at mcnairs [at] andrew [dot] cmu [dot] edu, or use one of the homing pigeons I have stored at 308 Negra Arroyo Lane, NM.
            </p>
        </Layout>
    );
};

export default About;
