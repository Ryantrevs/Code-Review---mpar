import * as React from 'react';
import styles from './Pagina2.module.scss';
import { IPagina2Props } from './IPagina2Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Pagina2 extends React.Component<IPagina2Props, {}> {
  public render(): React.ReactElement<IPagina2Props> {
    return (
      <div className={ styles.pagina2 }>
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
