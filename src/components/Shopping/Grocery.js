import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List'
import Badge from 'material-ui/Badge'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addGrocery } from '../../actions'

class Grocery extends Component {
    render() {
        console.log('grocery props: ',this.props);
        return (
            <div className='grocery'>
                <List>
                    {this.props.grocery.map((item) => {
                        return <ListItem onClick = { () => this.props.addGrocery(item.id) }  key={item.id} primaryText={item.name} children={<div>
                            <Badge badgeContent={'$'+item.cost} primary={true} badgeStyle={{ top: 33, right: 400, width:64 }} />
                            <Badge badgeContent={item.calories+'kcal'} secondary={true} badgeStyle={{ top: 33, right: 300, width:64 }} />
                            <Badge badgeContent={item.weight+'mg'} primary={true} badgeStyle={{ top: 33, right: 200, width:64 }} />
                        </div>} />
                    })}
                </List>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('mapstate: ', state);
    return {
        grocery: state.groceryItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addGrocery }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Grocery)
//export default Grocery