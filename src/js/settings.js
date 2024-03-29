import $ from 'jquery';
import '../lang/summernote-en-US';
import './summernote';
import dom from './core/dom';
import range from './core/range';
import lists from './core/lists';
import Editor from './module/Editor';
import Clipboard from './module/Clipboard';
import Dropzone from './module/Dropzone';
import Codeview from './module/Codeview';
import Statusbar from './module/Resizebar';
import Resizebar from './module/Statusbar';
import Fullscreen from './module/Fullscreen';
import Handle from './module/Handle';
import AutoLink from './module/AutoLink';
import AutoSync from './module/AutoSync';
import AutoReplace from './module/AutoReplace';
import Placeholder from './module/Placeholder';
import Buttons from './module/Buttons';
import Toolbar from './module/Toolbar';
import LinkDialog from './module/LinkDialog';
import LinkPopover from './module/LinkPopover';
import ImageDialog from './module/ImageDialog';
import ImagePopover from './module/ImagePopover';
import TablePopover from './module/TablePopover';
import VideoDialog from './module/VideoDialog';
import VideoPopover from './module/VideoPopover';
import HelpDialog from './module/HelpDialog';
import AirPopover from './module/AirPopover';
import HintPopover from './module/HintPopover';
import Zoom from './module/Zoom';

$.summernote = $.extend($.summernote, {
  version: '@@VERSION@@',
  plugins: {},

  dom: dom,
  range: range,
  lists: lists,

  options: {
    langInfo: $.summernote.lang['en-US'],
    lang: 'en-US',

    editing: true,
    modules: {
      'editor': Editor,
      'clipboard': Clipboard,
      'dropzone': Dropzone,
      'codeview': Codeview,
      'statusbar': Statusbar,
      'resizebar': Resizebar,
      'fullscreen': Fullscreen,
      'handle': Handle,
      // FIXME: HintPopover must be front of autolink
      //  - Script error about range when Enter key is pressed on hint popover
      'hintPopover': HintPopover,
      'autoLink': AutoLink,
      'autoSync': AutoSync,
      'autoReplace': AutoReplace,
      'placeholder': Placeholder,
      'buttons': Buttons,
      'toolbar': Toolbar,
      'linkDialog': LinkDialog,
      'linkPopover': LinkPopover,
      'imageDialog': ImageDialog,
      'imagePopover': ImagePopover,
      'tablePopover': TablePopover,
      'videoDialog': VideoDialog,
      'videoPopover': VideoPopover,
      'helpDialog': HelpDialog,
      'airPopover': AirPopover,
      'zoom': Zoom,
    },

    buttons: {},

    followingToolbar: false,
    toolbarPosition: 'top',
    stickyToolbar: false,
    stickyStatus: false,
    otherStaticBar: '',
    dropUp: false, // false uses default dropdown,
    toolbarButtonDropUp: true, // true|false If toolbarPosition = 'bottom' this will override dropUp.
    statusOutputTime: 5000, // default 5 seconds.

    // toolbar
    codeviewKeepButton: false,
    toolbar: [
      ['style', ['block', 'inline']],
      ['clipboard', ['redo', 'undo']],
      ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
      ['fontname', ['fontname', 'fontsize', 'fontsizeunit']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph' ,'height']],
      ['table', ['table']],
      ['insert', ['hr', 'link', 'picture', 'video']],
      ['zoom', ['zoomOut', 'zoomValue', 'zoomIn']],
      ['view', ['fullscreen', 'codeview', 'help']],
    ],

    // popover
    popatmouse: true,
    popover: {
      image: [
        ['resize', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
        ['float', ['floatLeft', 'floatRight', 'floatNone']],
        ['remove', ['removeMedia']],
      ],
      video: [
        ['remove', ['removeVideo']],
      ],
      link: [
        ['link', ['linkDialogShow', 'unlink']],
      ],
      table: [
        ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
        ['delete', ['deleteRow', 'deleteCol', 'deleteTable']],
      ],
      air: [
        ['style', ['block', 'inline']],
        ['clipboard', ['redo', 'undo']],
        ['font', ['bold', 'italic', 'underline', 'strikethrough' ,'superscript', 'subscript', 'clear']],
        ['fontname', ['fontname', 'fontsize', 'fontsizeunit']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph', 'height']],
        ['table', ['table']],
        ['insert', ['hr', 'link', 'picture', 'video']],
        ['view', ['fullscreen', 'help']],
      ],
    },

    // link options
    linkAddNoReferrer: false,
    addLinkNoOpener: false,
    linkTargetBlank: true,
    linkList: [
      // [ 'title', 'url', 'select text' ],
    ],

    // air mode: inline editor
    airMode: false,
    overrideContextMenu: false, // TBD

    width: null,
    height: null,

    focus: false,
    tabDisable: false,
    tabSize: 4,
    styleWithCSS: false,
    shortcuts: true,
    textareaAutoSync: true,
    tooltip: 'auto',
    placement: 'bottom', // none|top|right|bottom|left | Needs Documenting
    container: null,
    maxTextLength: 0,
    blockquoteBreakingLevel: 2,
    spellCheck: true,
    disableGrammar: false,
    placeholder: null,
    inheritPlaceholder: false,
    // TODO: need to be documented
    recordEveryKeystroke: false,
    historyLimit: 200,

    // TODO: need to be documented
    showDomainOnlyForAutolink: false,

    // TODO: need to be documented
    hintMode: 'word',
    hintSelect: 'after',
    hintDirection: 'bottom',

    blockTags: ['address', 'blockquote', 'details', 'div', 'p', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],

    inlineTags: ['abbr', 'b', 'cite', 'code', 'del', 'em', 'figure', 'figcaption', 'i', 'ins', 'kbd', 'mark', 'picture', 'q', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var'],

    fontNames: [
      'Arial', 'Arial Black', 'Bookman Old Style', 'Brush Script MT', 'Calibri',
      'Charcoal', 'Comic Sans MS', 'Courier New', 'Garamond', 'Georgia',
      'Helvetica', 'Helvetica Neue', 'Impact', 'Lucida', 'Monaco Monospace',
      'Palatino Linotype', 'Roboto', 'Sans-Serif', 'Tahoma', 'Times New Roman',
      'Trebuchet MS', 'Verdana',
    ],
    fontNamesIgnoreCheck: [],
    addDefaultFonts: true,

    fontSizes: ['8', '9', '10', '11', '12', '14', '15', '16', '17', '18', '19', '20', '24', '36'],

    fontSizeUnits: ['em', 'px', 'pt', 'rem'],

    // pallete colors(n x n)
    colors: [
      ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'],
      ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],
      ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],
      ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],
      ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'],
      ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'],
      ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'],
      ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031'],
    ],

    // http://chir.ag/projects/name-that-color/
    colorsName: [
      ['Black', 'Tundora', 'Dove Gray', 'Star Dust', 'Pale Slate', 'Gallery', 'Alabaster', 'White'],
      ['Red', 'Orange Peel', 'Yellow', 'Green', 'Cyan', 'Blue', 'Electric Violet', 'Magenta'],
      ['Azalea', 'Karry', 'Egg White', 'Zanah', 'Botticelli', 'Tropical Blue', 'Mischka', 'Twilight'],
      ['Tonys Pink', 'Peach Orange', 'Cream Brulee', 'Sprout', 'Casper', 'Perano', 'Cold Purple', 'Careys Pink'],
      ['Mandy', 'Rajah', 'Dandelion', 'Olivine', 'Gulf Stream', 'Viking', 'Blue Marguerite', 'Puce'],
      ['Guardsman Red', 'Fire Bush', 'Golden Dream', 'Chelsea Cucumber', 'Smalt Blue', 'Boston Blue', 'Butterfly Bush', 'Cadillac'],
      ['Sangria', 'Mai Tai', 'Buddha Gold', 'Forest Green', 'Eden', 'Venice Blue', 'Meteorite', 'Claret'],
      ['Rosewood', 'Cinnamon', 'Olive', 'Parsley', 'Tiber', 'Midnight Blue', 'Valentino', 'Loulou'],
    ],

    colorButton: {
      foreColor: '#000000',
      backColor: '#FFFF00',
    },

    lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],

    tableClassName: 'table table-bordered',

    insertTableMaxSize: {
      col: 10,
      row: 10,
    },

    // By default, dialogs are attached in container.
    dialogsInBody: false,
    dialogsAnim: '', // [empty]|bounce|elastic|fade|slide|slit|tilt

    disableUpload: false, // true|false Disables display of upload option in ImageDialog,
    imageService: '',
      // Set by adding a button with the trigger code such as: '<button data-fancybox data-type="ajax" data-src="[file that processes the request]?t=note-image-url" data-tooltip="tooltip" aria-label="Browse Unsplash for Image">Browse Unsplash</button>'
      // Fancybox is triggered to open a dialog, and call the file in the data-src
      // The ?t=note-image-url is the field in the image dialog to populate with the image url
    fileExplorer: '', // If set with the Javascript function name, and button in ImageDialog.js will be shown, which also parses in the ID of the #note-dialog-image-url so the function can return the URL of the selected file for insertion. Note, only the function name is required for eg 'elfinderDialog'.
    maximumImageFileSize: null,
    acceptImageFileTypes: "image/*",

    allowClipboardImagePasting: true,

    callbacks: {
      onBeforeCommand: null,
      onBlur: null,
      onBlurCodeview: null,
      onChange: null,
      onChangeCodeview: null,
      onDialogShown: null,
      onDrop: null,
      onEnter: null,
      onFocus: null,
      onImageLinkInsert: null,
      onImageUpload: null,
      onImageUploadError: null,
      onInit: null,
      onKeydown: null,
      onKeyup: null,
      onMousedown: null,
      onMouseup: null,
      onPaste: null,
      onScroll: null,
    },

    codemirror: {
      mode: 'text/html',
      htmlMode: true,
      lineNumbers: true,
    },

    codeviewFilter: true,
    codeviewFilterRegex: /<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml)[^>]*?>/gi,
    codeviewIframeFilter: true,
    codeviewIframeWhitelistSrc: [],
    codeviewIframeWhitelistSrcBase: [
      'www.youtube.com',
      'www.youtube-nocookie.com',
      'www.facebook.com',
      'vine.co',
      'instagram.com',
      'player.vimeo.com',
      'www.dailymotion.com',
      'player.youku.com',
      'jumpingbean.tv',
      'v.qq.com',
      'www.tiktok.com',
    ],

    keyMap: {
      pc: {
        'ESC': 'escape',
        'ENTER': 'insertParagraph',
        'CTRL+Z': 'undo',
        'CTRL+Y': 'redo',
        'TAB': 'tab',
        'SHIFT+TAB': 'untab',
        'CTRL+B': 'bold',
        'CTRL+I': 'italic',
        'CTRL+U': 'underline',
        'CTRL+SHIFT+S': 'strikethrough',
        'CTRL+BACKSLASH': 'removeFormat',
        'CTRL+SHIFT+L': 'justifyLeft',
        'CTRL+SHIFT+E': 'justifyCenter',
        'CTRL+SHIFT+R': 'justifyRight',
        'CTRL+SHIFT+J': 'justifyFull',
        'CTRL+SHIFT+NUM7': 'insertUnorderedList',
        'CTRL+SHIFT+NUM8': 'insertOrderedList',
        'CTRL+LEFTBRACKET': 'outdent',
        'CTRL+RIGHTBRACKET': 'indent',
        'CTRL+NUM0': 'formatPara',
        'CTRL+NUM1': 'formatH1',
        'CTRL+NUM2': 'formatH2',
        'CTRL+NUM3': 'formatH3',
        'CTRL+NUM4': 'formatH4',
        'CTRL+NUM5': 'formatH5',
        'CTRL+NUM6': 'formatH6',
        'CTRL+ENTER': 'insertHorizontalRule',
        'CTRL+SHIFT+K': 'linkDialog.show',
        'CTRL+SHIFT+I': 'imageDialog.show',
        'CTRL+SHIFT+V': 'videoDialog.show',
        'F1': 'helpDialog.show',
      },

      mac: {
        'ESC': 'escape',
        'ENTER': 'insertParagraph',
        'CMD+Z': 'undo',
        'CMD+SHIFT+Z': 'redo',
        'TAB': 'tab',
        'SHIFT+TAB': 'untab',
        'CMD+B': 'bold',
        'CMD+I': 'italic',
        'CMD+U': 'underline',
        'CMD+SHIFT+S': 'strikethrough',
        'CMD+BACKSLASH': 'removeFormat',
        'CMD+SHIFT+L': 'justifyLeft',
        'CMD+SHIFT+E': 'justifyCenter',
        'CMD+SHIFT+R': 'justifyRight',
        'CMD+SHIFT+J': 'justifyFull',
        'CMD+SHIFT+NUM7': 'insertUnorderedList',
        'CMD+SHIFT+NUM8': 'insertOrderedList',
        'CMD+LEFTBRACKET': 'outdent',
        'CMD+RIGHTBRACKET': 'indent',
        'CMD+NUM0': 'formatPara',
        'CMD+NUM1': 'formatH1',
        'CMD+NUM2': 'formatH2',
        'CMD+NUM3': 'formatH3',
        'CMD+NUM4': 'formatH4',
        'CMD+NUM5': 'formatH5',
        'CMD+NUM6': 'formatH6',
        'CMD+ENTER': 'insertHorizontalRule',
        'CMD+SHIFT+K': 'linkDialog.show',
        'CMD+SHIFT+I': 'imageDialog.show',
        'CMD+SHIFT+V': 'videoDialog.show',
        'H1': 'helpDialog.show',
      },
    },

    icons: {
      'align': 'note-icon-align',
      'alignCenter': 'note-icon-align-center',
      'alignJustify': 'note-icon-align-justify',
      'alignLeft': 'note-icon-align-left',
      'alignRight': 'note-icon-align-right',
      'arrowsAlt': 'note-icon-arrows-alt',
      'block': 'note-icon-block',
      'bold': 'note-icon-bold',
      'caret': 'note-icon-caret',
      'circle': 'note-icon-circle',
      'close': 'note-icon-close',
      'code': 'note-icon-code',
      'colAfter': 'note-icon-col-after',
      'colBefore': 'note-icon-col-before',
      'colRemove': 'note-icon-col-remove',
      'eraser': 'note-icon-eraser',
      'floatLeft': 'note-icon-float-left',
      'floatRight': 'note-icon-float-right',
      'font': 'note-icon-font',
      'frame': 'note-icon-frame',
      'help': 'note-icon-help',
      'indent': 'note-icon-align-indent',
      'inline': 'note-icon-inline',
      'italic': 'note-icon-italic',
      'link': 'note-icon-link',
      'magic': 'note-icon-magic',
      'menuCheck': 'note-icon-menu-check',
      'minus': 'note-icon-minus',
      'orderedlist': 'note-icon-orderedlist',
      'outdent': 'note-icon-align-outdent',
      'pencil': 'note-icon-pencil',
      'picture': 'note-icon-picture',
      'question': 'note-icon-question',
      'redo': 'note-icon-redo',
      'rollback': 'note-icon-rollback',
      'rowAbove': 'note-icon-row-above',
      'rowBelow': 'note-icon-row-below',
      'rowRemove': 'note-icon-row-remove',
      'square': 'note-icon-square',
      'strikethrough': 'note-icon-strikethrough',
      'subscript': 'note-icon-subscript',
      'superscript': 'note-icon-superscript',
      'table': 'note-icon-table',
      'textHeight': 'note-icon-text-height',
      'trash': 'note-icon-trash',
      'underline': 'note-icon-underline',
      'unlink': 'note-icon-chain-broken',
      'undo': 'note-icon-undo',
      'unorderedlist': 'note-icon-unorderedlist',
      'video': 'note-icon-video',
      'zoomIn': 'note-icon-add',
      'zoomOut': 'note-icon-remove',
    },
  },
});
