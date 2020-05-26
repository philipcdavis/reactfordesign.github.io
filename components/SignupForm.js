import React, { Component } from 'react';
import { InputDark } from './Tile'
import { BtnInput } from '../components/Button'
import {Box, Flex} from 'rebass/styled-components'

const url = "https://twitter.us18.list-manage.com/subscribe/post?u=4b8048aee994b838162f80e3a&amp;id=21229251bb";

class SignupForm extends Component {
  render() {
    return (
      <div id="mc_embed_signup">
        <form action={url} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <Flex id="mc_embed_signup_scroll" mx="auto">
            <Box flexGrow={1} className="mc-field-group">
            	<InputDark group type="email" placeholder="Email Address" name="EMAIL" className="required email" id="mce-EMAIL" />
            </Box>
          	<span id="mce-responses" className="clear">
          		<div className="response" id="mce-error-response" style={{display:"none"}}></div>
          		<div className="response" id="mce-success-response" style={{display:"none"}}></div>
          	</span>

            <div style={{position: "absolute", left: -5000}} aria-hidden="true">
              <input type="text" name="b_4b8048aee994b838162f80e3a_21229251bb" tabIndex="-1" defaultValue="" />
            </div>
            <Box>
              <BtnInput as="input" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
            </Box>
          </Flex>
        </form>
      </div>

    );
  }
}


export default SignupForm;
