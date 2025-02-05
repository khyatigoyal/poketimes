import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';
import {connect} from 'react-redux';

class Home extends Component {
    
    render() {
        console.log(this.props);
        const {posts} = this.props;
        const postList= posts.length ? (
            posts.map(post=>{
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A pokeball" />
                        <div className="card-container" >
                            <Link to={'/' + post.id}>
                            <span className="card-title red-text" >{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                            
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center white-text">
                You don't have any posts left
            </div>
        )
    return(
        <div className="container home">
            <h4 className="center white-text">Home</h4>
            {postList}
        </div>
    )
    }
}
const MapStateToProp = (state) =>{
    return{
        posts : state.posts
    }
}
export default connect(MapStateToProp)(Home);