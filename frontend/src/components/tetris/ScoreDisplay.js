import React from "react";
import { Card, Feed, Icon } from "semantic-ui-react";

const ScoreDisplay = (props) => {
  return (
    <Card>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Label>
              <Icon name="star"></Icon>
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>10,000</Feed.Summary>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label>
              <Icon name="star"></Icon>
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>10,000</Feed.Summary>
            </Feed.Content>
          </Feed.Event>
          <Feed.Event>
            <Feed.Label>
              <Icon name="star"></Icon>
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>10,000</Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
    </Card>
  );
};

export default ScoreDisplay;
