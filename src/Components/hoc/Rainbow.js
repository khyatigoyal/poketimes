import React from 'react';

const Rainbow = (WrappedComponent) => {

      const  colors = ['red','blue','pink','yellow','green','orange'];
        const    colorList = colors[Math.floor(Math.random() * 5)];

        const colorname = colorList + '-text';

    return  (props) => {
        return (
            <div className={colorname}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}
export default Rainbow;