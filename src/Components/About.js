import React from 'react';
import Rainbow from './hoc/Rainbow';
const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Tenetur dignissimos illum incidunt, 
            facilis enim quod deleniti velit nihil magni necessitatibus dicta eveniet ab ea quam modi. Rerum accusamus repellat ipsum?
            </p>
        </div>
    )
}
export default Rainbow(About);
