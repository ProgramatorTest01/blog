import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateArticle from "./components/admin/create-article.component";
import EditArticle from "./components/admin/edit-article.component";
import ArticleList from "./components/admin/article-list.component";
import About from "./components/articles/about";
import Login from "./components/login/login";
import Profile from "./components/login/profile";
import Welcome from "./components/articles/welcome";
import Contact from "./components/articles/contact";
import ArticleFull from "./components/articles/article-full";
import ArticlesIntro from "./components/articles/articles-introduction";
import AdminLogin from "./components/admin/admin-login";
import AddComment from "./components/comments/add-comment";
import CommentsList from "./components/comments/comments-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Container>
            <Row>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={Welcome} />
                  <Route path="/about" component={About} />
                  <Route path="/create-article" component={CreateArticle} />
                  <Route path="/create-comment" component={AddComment} />
                  <Route path="/edit-article/:id" component={EditArticle} />
                  <Route path="/one-article/:id" component={ArticleFull} />
                  <Route path="/article-list" component={ArticleList} />
                  <Route path="/comments-list" component={CommentsList} />
                  <Route path="/login" component={Login} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/articles" component={ArticlesIntro} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/admin" component={AdminLogin} />
                </Switch>
              </div>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
