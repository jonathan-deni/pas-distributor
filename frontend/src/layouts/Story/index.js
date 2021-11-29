import React, { Component } from 'react';

export default class Story extends Component {
    render() {
        return (
            <section id="story" className="container-story">
                <div className="content-story">
                    <h2 className="content-title">Our Story</h2>
                    <p className="content-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus tellus in nisi ornare, non gravida sem ornare. Sed vitae ex quis justo pharetra vehicula. Aenean vestibulum velit non turpis laoreet dignissim. Sed vel vestibulum est. Fusce in luctus urna, mollis tincidunt risus. Integer sed leo ligula. Morbi in tincidunt mi. Aenean interdum tellus id varius consectetur.
                    </p>
                </div>
            </section>
        );
    }
}
