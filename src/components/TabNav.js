import React, {Component} from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default class TabNav  extends Component {
        state = {}
      
        handleItemClick = (e, { name }) => this.setState({ activeItem: name })
      
        render() {
          const { activeItem } = this.state
      
          return (
            <Menu>
              <NavLink to="/">
                <Menu.Item
                    name='home_page'
                    active={activeItem === 'home_page'}
                    onClick={this.handleItemClick}
                >
                <Icon name='home' /> Home Page
                </Menu.Item>
              </NavLink>
      
              <NavLink to="/characters">
                <Menu.Item
                    name='characters'
                    active={activeItem === 'characters'}
                    onClick={this.handleItemClick}
                >
                <Icon name='users' /> Characters
                </Menu.Item>
              </NavLink>
      
              <NavLink to="/locations">
                <Menu.Item
                    name='locations'
                    active={activeItem === 'locations'}
                    onClick={this.handleItemClick}
                >
                <Icon name='map' /> Locations
                </Menu.Item>
              </NavLink>

              <NavLink to="/episodes">
                <Menu.Item
                    name='episodes'
                    active={activeItem === 'episodes'}
                    onClick={this.handleItemClick}
                >
                <Icon name='video' /> Episodes
                </Menu.Item>
              </NavLink>

            </Menu>
          )
        }
};
