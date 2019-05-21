import * as React from 'react';
import styles from '../SpFxReact.module.scss';
import { ISpFxReactProps } from '../ISpFxReactProps';
import { escape } from '@microsoft/sp-lodash-subset';
import ISession from '../ISpFxReactState';
import {autobind} from 'office-ui-fabric-react';

export interface ISessionItemProps{
  sessionItem: ISession;
  onDeleteItem: any;
}

export default class SessionItem extends React.Component<ISessionItemProps, {}> {
    public render(): React.ReactElement<ISessionItemProps> {
        return (
            <div>
                <li>{this.props.sessionItem.title} ({this.props.sessionItem.speaker}) <span onClick={this._handleDelete}> X </span></li>
            </div>
        );
    }

    private _handleDelete(event?: React.MouseEvent<HTMLButtonElement>) {
        this.props.onDeleteItem(this.props.sessionItem);
    }
}