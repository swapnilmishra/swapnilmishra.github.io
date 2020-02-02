import React from "react";
import Helmet from "react-helmet";
import DisqusThread from "react-disqus-thread";
import SitePost from "../components/SitePost";
import SitePage from "../components/SitePage";
import { config } from "config";

class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;
    let layout, template;

    layout = post.layout;

    if (layout != "page") {
      template = <SitePost {...this.props} />;
    } else {
      template = <SitePage {...this.props} />;
    }

    return (
      <div>
        <Helmet title={`${post.title} - ${config.siteTitle}`} />
        {template}
        <DisqusThread
          shortname='https-swapnilmishra-github-io'
          identifier={post.title}
          title={post.title}
        />
      </div>
    );
  }
}

MarkdownWrapper.propTypes = { route: React.PropTypes.object };

export default MarkdownWrapper;