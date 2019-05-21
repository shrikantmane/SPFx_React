import * as React from 'react';
import styles from '../SpFxReact.module.scss';
import { ISpFxReactProps } from '../ISpFxReactProps';
import { escape } from '@microsoft/sp-lodash-subset';
import ISession from '../ISpFxReactState';
import {autobind} from 'office-ui-fabric-react';
import SessionItem from '../Sessions/SessionItem';
import { Spinner, SpinnerSize } from "office-ui-fabric-react";


export interface ISessionListProps {
    sessionItems: ISession[];
    handleDelete: any;
}

export default class SessionList extends React.Component<ISessionListProps, {}> {
    constructor(props: ISessionListProps) {
        super(props);
    }

    public render(): React.ReactElement<ISessionListProps> {
        return (
            <div>
                <ul>
                    {this.props.sessionItems != null ?
                        this.props.sessionItems.map(item => {
                            return (<SessionItem sessionItem={item} onDeleteItem={this.props.handleDelete}></SessionItem>)
                        }
                        )
                        : <Spinner size={SpinnerSize.medium} />}
                </ul>
            </div>
        );
    }
}
