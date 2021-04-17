import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ITourManager } from 'jupyterlab-tour';

/**
 * Initialization data for the with_tour extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'with_tour:plugin',
  autoStart: true,
  requires: [ITourManager],
  activate: (app: JupyterFrontEnd, tourManager: ITourManager) => {
    console.log('JupyterLab extension with_tour is activated!');
  }
};

export default extension;
