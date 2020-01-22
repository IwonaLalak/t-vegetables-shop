import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonToolbar} from "react-bootstrap";
import {Delete, Edit, Save, Times} from "../../_utilities/icons/FontAwesome";

export const ActionButton = props => {
    let {icon, text, theme, size, type, disabled, onClick} = props;
    return (
        <Button
            onClick={onClick}
            variant={theme}
            size={size}
            type={type}
            disabled={disabled}
        >
            {
                Boolean(icon) && <span style={Boolean(text) ? {marginRight: '5px'} : {}}>{icon}</span>
            }
            {
                Boolean(text) && text
            }
        </Button>
    );
};

ActionButton.propTypes = {
    icon: PropTypes.any,
    text: PropTypes.string,
    theme: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark']),
    size: PropTypes.oneOf(['sm', 'lg']),
    type: PropTypes.oneOf(['button', 'submit']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func

};

ActionButton.defaultProps = {
    theme: 'primary',
    type: 'button',
    size: '',
    disabled: false,
};


export const EditDeleteButtonGroup = props => {
    let {visibleIcons, visibleText, size, disabled, onClickEdit, onClickDelete} = props;
    return (
        <ButtonToolbar>
            <Button onClick={onClickEdit}
                    size={size}
                    disabled={disabled}
                    variant={'warning'}
                    type={'button'}
            >
                {
                    visibleIcons && <span style={visibleText ? {marginRight: '5px'} : {}}><Edit/></span>
                }
                {
                    visibleText && <span>Edit item</span>
                }
            </Button>
            <Button onClick={onClickDelete}
                    size={size}
                    disabled={disabled}
                    variant={'danger'}
                    type={'button'}
            >
                {
                    visibleIcons && <span style={visibleText ? {marginRight: '5px'} : {}}><Delete/></span>
                }
                {
                    visibleText && <span>Delete item</span>
                }
            </Button>
        </ButtonToolbar>
    )
};

EditDeleteButtonGroup.propTypes = {
    visibleIcons: PropTypes.bool,
    visibleText: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'lg']),
    disabled: PropTypes.bool,
    onClickEdit: PropTypes.func,
    onClickDelete: PropTypes.func
};

EditDeleteButtonGroup.defaultProps = {
    visibleIcons: true,
    visibleText: true,
    size: '',
    disabled: false,
};


export const SaveCancelButtonGroup = props => {
    let {visibleIcons, visibleText, size, disabled, onClickCancel, onClickSave} = props;
    return (
        <ButtonToolbar>
            <Button onClick={onClickCancel}
                    size={size}
                    disabled={disabled}
                    variant={'light'}
                    type={'button'}
            >
                {
                    visibleIcons && <span style={visibleText ? {marginRight: '5px'} : {}}><Times/></span>
                }
                {
                    visibleText && <span>Cancel</span>
                }
            </Button>
            <Button onClick={onClickSave}
                    size={size}
                    disabled={disabled}
                    variant={'primary'}
                    type={'submit'}
            >
                {
                    visibleIcons && <span style={visibleText ? {marginRight: '5px'} : {}}><Save/></span>
                }
                {
                    visibleText && <span>Save</span>
                }
            </Button>
        </ButtonToolbar>
    )
};

SaveCancelButtonGroup.propTypes = {
    visibleIcons: PropTypes.bool,
    visibleText: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'lg']),
    disabled: PropTypes.bool,
    onClickCancel: PropTypes.func,
    onClickSave: PropTypes.func
};

SaveCancelButtonGroup.defaultProps = {
    visibleIcons: true,
    visibleText: true,
    size: '',
    disabled: false,
};