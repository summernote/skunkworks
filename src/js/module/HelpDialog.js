import $ from 'jquery';
import env from '../core/env';

export default class HelpDialog {
  constructor(context) {
    this.context = context;

    this.ui = $.summernote.ui;
    this.$body = $(document.body);
    this.$editor = context.layoutInfo.editor;
    this.options = context.options;
    this.lang = this.options.langInfo;
  }

  initialize() {
    const $container = this.options.dialogsInBody ? this.$body : this.options.container;
    const body = [
      '<p style="position:relative;text-align:center;margin:0;padding:0;">',
        '<i class="note-icon-summernote"><svg role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="#ee6e55" d="M6.66751 12.8059707c-.15454-.1545-.19378-.2744-.19378-.5921v-.3983h1.02631v.3983c0 .3177-.0393.4376-.19378.5921-.10658.1066-.2503.1938-.31938.1938-.0691 0-.2128-.087-.31937-.1938zm-3.93155-1.6085c-.20465-.2261-.1555-.4667.1654-.8097l.29605-.3164.35181.3192.35181.3192-.30862.316c-.34322.3515-.6399.411-.85645.1717zm7.6444-.1727l-.30962-.3171.33656-.3342.33656-.3342.3123.3324c.34285.365.39641.6328.16793.8395-.24086.218-.50607.1594-.84373-.1864zm-3.94611.1527c-1.68414-.2105-3.12228-1.4724-3.55017-3.1152-.1548-.5943-.1548-1.6096 0-2.204.37139-1.4258 1.57822-2.6277 3.00894-2.9966.59498-.1534 1.58631-.1602 2.13291-.015.48039.1279 1.2899.4869 1.2899.572 0 .033-.70606.7718-1.56901 1.6425l-1.56901 1.583-.20437.6711c-.27289.8961-.23401.9351.66008.6627l.66915-.2038 1.58141-1.5716c.86978-.8643 1.60635-1.5715 1.63683-1.5715.0952 0 .44862.7656.57189 1.2389.0648.2487.11685.7733.11573 1.1658-.007 2.5361-2.22522 4.4601-4.77428 4.1414zm-5.25112-3.8469c-.20926-.1695-.23369-.5246-.0488-.7094.0841-.084.26937-.1289.54276-.1312h.41506l.0235.4934.0235.4934H1.7494c-.25853 0-.44919-.048-.56627-.1429zm10.67499-.3505l.0235-.4935h.41506c.43242 0 .59315.097.68311.3987.0319.1069-.009.2393-.11568.375-.14271.1814-.2234.2098-.59725.2098h-.43225l.0235-.4934zm-1.53631-3.3991l-.3756-.4069.33612-.3326c.46244-.4575.69901-.5041 1.0052-.1979.33156.3315.31076.5712-.087 1.0027-.17921.1944-.36573.3508-.41447.3476-.0487 0-.25765-.1891-.46423-.4129zm-7.42417-.038c-.35368-.3622-.38719-.6611-.0955-.8522.26021-.1705.49408-.1024.82673.2408l.27114.2798-.30809.3155c-.16945.1735-.3292.3155-.355.3155-.0258 0-.17845-.1347-.33924-.2994zm3.57609-1.8146c0-.4965.16324-.7281.51315-.7281.34992 0 .51316.2316.51316.7281v.3772H6.47373v-.3772z"/><path fill="#03a7fa" d="M6.66751 12.8061707c-.15454-.1545-.19378-.2744-.19378-.5921v-.3983h1.02631v.3983c0 .3177-.0392.4376-.19378.5921-.10658.1066-.2503.1938-.31938.1938-.0691 0-.2128-.087-.31937-.1938zm-3.93155-1.6085c-.20465-.2261-.1555-.4667.1654-.8097l.29605-.3164.35181.3192.35181.3192-.30862.316c-.34322.3515-.6399.411-.85645.1717zm7.6444-.1727l-.30962-.3171.33656-.3342.33656-.3342.3123.3324c.34285.365.39641.6328.16793.8395-.24086.218-.50607.1594-.84373-.1864zm-3.94611.1527c-1.68414-.2105-3.12228-1.4724-3.55017-3.1152-.1548-.5943-.1548-1.6096 0-2.204.37139-1.4258 1.57822-2.6277 3.00894-2.9966.59498-.1534 1.58631-.1602 2.13291-.015.48039.1279 1.2899.4869 1.2899.572 0 .033-.70606.7718-1.56901 1.6425l-1.56901 1.583-.20437.6711c-.27289.8961-.23401.9351.66008.6627l.66915-.2038 1.58141-1.5716c.86978-.8643 1.60635-1.5715 1.63683-1.5715.0952 0 .44862.7656.57189 1.2389.0648.2487.11685.7733.11573 1.1658-.007 2.5361-2.22522 4.4601-4.77428 4.1414zm-5.25112-3.8469c-.20926-.1695-.23369-.5246-.0488-.7094.0841-.084.26937-.1289.54276-.1312h.41506l.0235.4934.0235.4934H1.7494c-.25853 0-.44919-.048-.56627-.1429zm10.67499-.3505l.0235-.4935h.41506c.43242 0 .59315.097.68311.3987.0319.1069-.009.2393-.11568.375-.14271.1814-.2234.2098-.59725.2098h-.43225l.0235-.4934zm-8.96048-3.4376c-.35368-.3622-.38719-.6611-.0955-.8522.26021-.1705.49408-.1024.82673.2408l.27114.2798-.30809.3155c-.16945.1735-.3292.3155-.355.3155-.0258 0-.17845-.1347-.33924-.2994zm3.57609-1.8146c0-.4965.16324-.7281.51315-.7281.34992 0 .51316.2316.51316.7281v.3772H6.47373v-.3772z"/></svg></i>',
        '<a href="http://summernote.org/" target="_blank" rel="noopener noreferrer">Summernote @@VERSION@@</a> · ',
        '<a href="https://github.com/summernote/summernote/skunkworks" target="_blank" rel="noopener noreferrer">Project</a> · ',
        '<a href="https://github.com/summernote/summernote/skunkworks/issues" target="_blank" rel="noopener noreferrer">Issues</a>',
      '</p>',
    ].join('');

    this.$dialog = this.ui.dialog({
      title: this.lang.options.help,
      fade: this.options.dialogsFade,
      body: this.createShortcutList(),
      footer: body,
      callback: ($node) => {
        $node.find('.modal-body,.note-modal-body').css({
          'max-height': 300,
          'overflow': 'scroll',
        });
      },
    }).render().appendTo($container);
  }

  destroy() {
    this.ui.hideDialog(this.$dialog);
    this.$dialog.remove();
  }

  createShortcutList() {
    const keyMap = this.options.keyMap[env.isMac ? 'mac' : 'pc'];
    return Object.keys(keyMap).map((key) => {
      const command = keyMap[key];
      const $row = $('<div><div class="help-list-item"></div></div>');
      $row.append(
            $('<label class="note-help-label"><kbd>' + key + '</kdb></label>')
          )
          .append(
            $('<span class="note-help-text"></span>').html(this.context.memo('help.' + command) || command)
          );
      return $row.html();
    }).join('');
  }

  /**
   * show help dialog
   *
   * @return {Promise}
   */
  showHelpDialog() {
    return $.Deferred((deferred) => {
      this.ui.onDialogShown(this.$dialog, () => {
        this.context.triggerEvent('dialog.shown');
        deferred.resolve();
      });
      this.ui.showDialog(this.$dialog);
    }).promise();
  }

  show() {
    this.context.invoke('editor.saveRange');
    this.showHelpDialog().then(() => {
      this.context.invoke('editor.restoreRange');
    });
  }
}
