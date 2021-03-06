import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

class NavBar extends Component {
    state = {
        activeItem: 'home'
    };

    handleItemClick = (event, { name }) => this.setState({ activeItem: name});

    render() {
        const { activeItem } = this.state;
        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item name={"home"} active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item name={"messages"} active={activeItem === 'messages'} onClick={this.handleItemClick} />
                    <Menu.Menu position={'right'}>
                        <Menu.Item name={"logout"} active={activeItem === 'logout'} onClick={this.handleItemClick} />
                    </Menu.Menu>
                </Menu>
                <Segment>
                    <img src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Segment>
            </div>
        )
    }
}

export default NavBar;
