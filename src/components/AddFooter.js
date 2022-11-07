import React from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const styles = {
    footer: {
        position: 'fixed'
    }
}

const AddFooter = () => {
    return (<>
        <footer style={styles.footer} className="bg-success text-white text-center m-3 -3 w-100">
            {/* <h6>&copy; Brad Carlson</h6> */}

            <SocialIcon url="https://github.com/brad1200" />
            <a href="https://github.com/brad1200"></a>

            <SocialIcon url="https://www.linkedin.com/in/brad-carlson-04153623b/" />
            <a href="https://www.linkedin.com/in/brad-carlson-04153623b/"></a>

            <SocialIcon url="https://www.instagram.com/_brad_23" />
            <a href="https://www.instagram.com/_brad_23"></a>
        </footer>
    </>)
}

export default AddFooter;
