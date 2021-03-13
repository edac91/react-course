import React, { Component } from 'react';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";

class Blog extends Component {

    state = {
        auth: false
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>NewPost</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={NewPost}/> : null}
                    <Route path="/posts/" component={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>
                {/*<section>*/}
                {/*    <FullPost id={this.state.selectedPostId} />*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <NewPost />*/}
                {/*</section>*/}
            </div>
        );
    }
}

export default Blog;
