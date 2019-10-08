import React from "react";
import { Link } from "react-router-dom";

import constants from "../constants";
import Page from "../components/Page";

import styles from "./Welcome.module.scss";

import findProjectIdUri from "../media/find-project-id.png";
import greyPagesMetricsdUri from "../media/grey-pages-metrics.png";
import kpiUri from "../media/kpi.png";
import iUri from "../media/i.svg";
import successUri from "../media/success.svg";

const linkProps = {
    target: "_blank",
    rel: "noopenner noreferrer",
};

const Code = ({ children, ...restProps }) => (
    <code className={styles.code} {...restProps}>
        {children}
    </code>
);
const Pre = ({ children, ...restProps }) => (
    <pre className={styles.pre} {...restProps}>
        {children}
    </pre>
);
const Blockquote = ({ children, ...restProps }) => (
    <blockquote className={styles.blockquote} {...restProps}>
        {children}
    </blockquote>
);

const Welcome = () => {
    return (
        <Page>
            <div className={styles.Lead}>
                <h1>
                    <img src={successUri} alt="" />
                    <br />
                    Congratulations!
                    <br />
                    Your GoodData-powered app is created.
                </h1>
            </div>

            <h2>Your new GoodData-powered app is ready!</h2>
            <p>
                Now, let’s take one more step and set up your home dashboard with a test KPI widget. This will
                help verify that everything is set up correctly.
            </p>

            <ol>
                <li>
                    In <Code>/src/routes/AppRouter.js</Code>, find the line that says{" "}
                    <Code>DELETE THIS LINE</Code>, and delete it.
                    <br />
                    This removes the redirect to this help page and sets up the default landing page dashboard
                    for your app.
                </li>
                <li>
                    Log in to your app at <Link to="/login">/login</Link>.
                </li>
                <li>
                    Add a simple KPI to <Code>src/routes/Home.js</Code>.<br />
                    <Pre
                        style={{
                            backgroundColor: "#242629",
                            color: "#E8EAEA",
                            padding: 10,
                        }}
                    >
                        {`
import React from "react";
import { Kpi } from "@gooddata/react-components";

import Page from "../components/Page";

// 'sdk' will connect GD.UI components to the same GoodData domain you are logged in. You can change this in constants.js
import sdk from "../sdk";
import { projectId } from "../constants";

const project = {
    sdk,
    projectId,
};

const Home = () => {
    return (
        <Page>
            {/* Always make sure to add {...project} with sdk and projectId props to GD.UI components */}
            <Kpi {...project} measure="<measure-identifier>" />
        </Page>
    );
};

export default Home;
`}
                    </Pre>
                    <Blockquote>
                        <p>
                            <img src={iUri} alt="(i)" className={styles.inlineImg} />
                            &emsp;For more information, see{" "}
                            <a
                                href="https://sdk.gooddata.com/gooddata-ui/docs/kpi_component.html"
                                {...linkProps}
                            >
                                KPI Component
                            </a>
                            .
                        </p>
                    </Blockquote>
                </li>
                <li>
                    <p>
                        In <Code>src/constants.js</Code>:
                    </p>
                    <ol className={styles.subList}>
                        <li>
                            <p>
                                Set <Code>backend</Code> to your domain URI.
                            </p>
                            For example, <Code>https://secure.gooddata.com</Code> or{" "}
                            <Code>https://developer.na.gooddata.com</Code>.
                        </li>
                        <li>
                            <p>
                                Set <Code>projectId</Code> to your project ID.
                            </p>
                            <Blockquote>
                                <img src={iUri} alt="(i)" className={styles.inlineImg} />
                                &emsp;
                                <a
                                    href="https://help.gooddata.com/doc/en/project-and-user-administration/administering-projects-and-project-objects/find-the-project-id"
                                    {...linkProps}
                                >
                                    Learn how to find your project id.
                                </a>
                            </Blockquote>
                        </li>
                    </ol>
                    <p className={styles.imageFrame}>
                        <img src={findProjectIdUri} alt="Find your project id" />
                    </p>
                </li>
                <li>
                    <p>
                        Replace <Code>{`<measure-identifier>`}</Code> with an identifier of a measure of your
                        choice.{" "}
                        <a
                            href={`${constants.backend}/gdc/md/${constants.projectId}/query/metrics`}
                            {...linkProps}
                        >
                            Find your measures here
                        </a>{" "}
                        (requires Admin privileges),
                        <br />
                        select a measure and look for <Code>metric.meta.identifier</Code> on the details page.
                    </p>
                    <p className={styles.imageFrame}>
                        <img src={greyPagesMetricsdUri} alt="Grey pages - metrics" />
                    </p>
                </li>
                <li>
                    <p>
                        Check your KPI on the <Link to="/">Home route</Link>.
                    </p>
                    <p className={styles.imageFrame}>
                        <img src={kpiUri} alt="KPI example" />
                    </p>
                    <p>
                        Value of your KPI is likely different. As long as you don't see Error, you are good to
                        go. If you do see an error, please contact{" "}
                        <a href="https://sdk.gooddata.com/gooddata-ui/docs/support_options.html">
                            GoodData.UI support
                        </a>
                        .
                    </p>
                </li>
            </ol>
            <p>Now, you are ready to play around with your app.</p>

            <h2>Things to try next</h2>

            <h3>Add page (route)</h3>
            <ol>
                <li>
                    Duplicate a route in <Code>/src/routes</Code>
                </li>
                <li>
                    Add a new route in <Code>/src/routes/AppRouter.js</Code>
                </li>
            </ol>

            <h3>Add a link to the Navigation / Menu</h3>
            <p>
                Add a new <Code>{`<NavLink>`}</Code> component to <Code>/src/components/Header/Links.js</Code>
            </p>

            <h3>Add any example from Live Examples</h3>
            <p>
                Go to <a href="https://gooddata-examples.herokuapp.com">Live Examples</a>, explore and try out
                some code snippets.
            </p>

            <h3>
                Deploy your app to <a href="https://www.heroku.com/">Heroku</a>
            </h3>
            <ol>
                <li>
                    <p>
                        Create a new Heroku app with{" "}
                        <a href="https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack">
                            create-react-app buildpack
                        </a>{" "}
                        <Code>mars/create-react-app</Code>
                    </p>
                    <Pre>{`heroku create $APP_NAME --buildpack mars/create-react-app`}</Pre>
                </li>
                <li>
                    <p>Commit your changes</p>
                    <Pre>{`git add .
git commit -m "Setup Heroku deployment"`}</Pre>
                </li>
                <li>
                    Cross-domain requests need to be allowed for specific domains by GoodData.
                    <br />
                    Request your cross-domain exception by e-mail at{" "}
                    <a href="mailto:support@gooddata.com">support@gooddata.com</a>
                    <br />
                    Please list the domain of your app (e.g. <Code>gooddata-examples.herokuapp.com</Code>)
                    <br />
                    and the target GoodData domain (e.g. <Code>developer.na.gooddata.com</Code>).
                </li>
                <li>
                    <p>Trigger deployment and open your app in a browser.</p>
                    <Pre>{`git push heroku master
heroku open`}</Pre>
                </li>
            </ol>
        </Page>
    );
};

export default Welcome;
