import * as React from 'react';
import styles from './SpFxReact.module.scss';
import { ISpFxReactProps } from './ISpFxReactProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpFxReact extends React.Component<ISpFxReactProps, {}> {
  public render(): React.ReactElement<ISpFxReactProps> {
    return (
      <div className={ styles.spFxReact }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
