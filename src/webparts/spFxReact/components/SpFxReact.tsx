import * as React from 'react';
import styles from './SpFxReact.module.scss';
import { ISpFxReactProps } from './ISpFxReactProps';
import { escape } from '@microsoft/sp-lodash-subset';
import ISession from './ISpFxReactState';
import { HttpClientConfiguration, HttpClient, HttpClientResponse } from '@microsoft/sp-http';
import {autobind} from 'office-ui-fabric-react';
import SessionList from '../components/list/sessionlist'

export interface ISpFxReactState{
  sessionItems?: ISession[];
}

export default class SpFxReact extends React.Component<ISpFxReactProps, ISpFxReactState> {
  constructor(props: ISpFxReactProps){
    super(props);
    this.state = {
      sessionItems: null
    }
  }
  
  public componentDidMount(): void {
    this._retriveItems();
  }
  public render(): React.ReactElement<ISpFxReactProps> {
    return (
      <div className={ styles.spFxReact }>
        <div className="ms-Grid-row">
          <h1>Session list SPS Doha - demo</h1>
        </div>
        <div className="ms-Grid-row">
          <SessionList
            sessionItems={this.state.sessionItems}
            handleDelete={this._deleteItem}
          />
        </div>
        <div className="ms-Grid-row">
          {/* <Form handleAddItem={this._addItem} /> */}
        </div>
      </div>
    );
  }

  @autobind
  private _retriveItems(){
    this.props.httpClient.get("https://spsdohaapi.azurewebsites.net/api/values", HttpClient.configurations.v1)
    .then((data: HttpClientResponse) => data.json())
    .then((data: any) => {
      this.setState({
        sessionItems: data
      });
    })
  }

  @autobind
  private _addItem(session: ISession) {
    var sessionItems = this.state.sessionItems;
    sessionItems.push(session);
    this.setState({ sessionItems: sessionItems });
  }

  @autobind
  private _deleteItem(session: ISession) {
    this.setState(prevState => ({
      sessionItems: prevState.sessionItems.filter(el => el.title != session.title && el.speaker != session.title)
    }));
  }
}
