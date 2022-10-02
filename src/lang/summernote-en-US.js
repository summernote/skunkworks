import $ from 'jquery';

$.summernote = $.summernote || {
  lang: {},
};

$.extend(true, $.summernote.lang, {
  'en-US': {
    font: {
      bold: 'Bold',
      italic: 'Italic',
      underline: 'Underline',
      clear: 'Remove Font Style',
      height: 'Line Height',
      name: 'Font Family',
      strikethrough: 'Strikethrough',
      subscript: 'Subscript',
      superscript: 'Superscript',
      size: 'Font Size',
      sizeunit: 'Font Size Unit',
    },
    image: {
      image: 'Picture',
      insert: 'Insert Image',
      resizeFull: 'Resize full',
      resizeHalf: 'Resize half',
      resizeQuarter: 'Resize quarter',
      resizeNone: 'Original size',
      floatLeft: 'Float Left',
      floatRight: 'Float Right',
      floatNone: 'Remove float',
      shapeRounded: 'Shape: Rounded',
      shapeCircle: 'Shape: Circle',
      shapeThumbnail: 'Shape: Thumbnail',
      shapeNone: 'Shape: None',
      dragImageHere: 'Drag image or text here',
      dropImage: 'Drop image or Text',
      selectFromFiles: 'Select from files',
      fileNote: 'Select from files after filling in below fields.',
      maximumFileSize: 'Maximum file size',
      maximumFileSizeError: 'Maximum file size exceeded.',
      url: 'Image URL',
      remove: 'Remove',
      original: 'Original',
      fileBrowser: 'File&nbsp;Browser',
      title: 'Title',
      alt: 'Alt',
      class: 'Class',
    },
    video: {
      video: 'Video',
      videoLink: 'Video Link',
      insert: 'Insert Video',
      url: 'Video URL',
      providers: '(Bilibi, Dailymotion, Facebook, Google, Instagram, Peertube, QQ, TikTok, Vimeo, WISTIA, Vine, Youku, YouTube)',
      note: 'Note: Not all options are available with all services...',
      suggested: 'Show Suggested videos when the video finishes',
      controls: 'Show player controls',
      autoplay: 'Autoplay',
      loop: 'Loop',
      aspect: 'Aspect Ratio',
      captions: 'Show Captions',
      quality: 'Video Quality',
      remove: 'Remove',
    },
    link: {
      link: 'Link',
      insert: 'Insert Link',
      unlink: 'Unlink',
      edit: 'Edit',
      textToDisplay: 'Text to display',
      url: 'Link URL',
      title: 'Title',
      rel: 'Choose a Rel option to use',
      openInNewWindow: 'Open in new window',
      useProtocol: 'Use default protocol',
      linkList: 'Curated Links',
    },
    table: {
      table: 'Table',
      addRowAbove: 'Add row above',
      addRowBelow: 'Add row below',
      addColLeft: 'Add column left',
      addColRight: 'Add column right',
      delRow: 'Delete row',
      delCol: 'Delete column',
      delTable: 'Delete table',
    },
    hr: {
      insert: 'Insert Horizontal Rule',
    },
    block: {
      style: 'Block Elements',
      address: 'Address',
      blockquote: 'Blockquote',
      details: 'Details',
      div: 'Division',
      p: 'Paragraph',
      pre: 'Code, preformatted text',
      h1: 'Heading 1',
      h2: 'Heading 2',
      h3: 'Heading 3',
      h4: 'Heading 4',
      h5: 'Heading 5',
      h6: 'Heading 6',
    },
    inline: {
      style: 'Inline Elements',
      abbr: 'Abbreviation',
      b: 'Bold',
      cite: 'Citation',
      code: 'Code',
      del: 'Deleted',
      em: 'Emphasis',
      figure: 'Figure',
      figcaption: 'Figure Caption',
      i: 'Italic',
      ins: 'Insert',
      kbd: 'Keyboard',
      mark: 'Mark',
      picture: 'Picture',
      q: 'Quotation',
      s: 'Strikethrough',
      samp: 'Sample',
      small: 'Small',
      span: 'Span',
      strong: 'Strong',
      sub: 'Sub',
      sup: 'Sup',
      time: 'Time',
      u: 'Underline',
      var: 'Var',
    },
    zoom: {
      in: 'Zoom in',
      value: 'Zoom value',
      out: 'Zoom out',
    },
    lists: {
      unordered: 'Unordered list',
      ordered: 'Ordered list',
    },
    options: {
      help: 'Help',
      fullscreen: 'Full Screen',
      codeview: 'Code View',
    },
    paragraph: {
      paragraph: 'Paragraph',
      outdent: 'Outdent',
      indent: 'Indent',
      left: 'Align left',
      center: 'Align center',
      right: 'Align right',
      justify: 'Justify full',
    },
    color: {
      recent: 'Recent Color',
      more: 'More Color',
      background: 'Background Color',
      foreground: 'Text Color',
      transparent: 'Transparent',
      setTransparent: 'Set transparent',
      reset: 'Reset',
      resetToDefault: 'Reset to default',
      cpSelect: 'Select',
    },
    shortcut: {
      shortcuts: 'Keyboard shortcuts',
      close: 'Close',
      textFormatting: 'Text formatting',
      action: 'Action',
      paragraphFormatting: 'Paragraph formatting',
      documentStyle: 'Document Style',
      extraKeys: 'Extra keys',
    },
    help: {
      'escape': 'Escape',
      'insertParagraph': 'Insert Paragraph',
      'undo': 'Undo the last command',
      'redo': 'Redo the last command',
      'tab': 'Tab',
      'untab': 'Untab',
      'bold': 'Set a bold style',
      'italic': 'Set a italic style',
      'underline': 'Set a underline style',
      'strikethrough': 'Set a strikethrough style',
      'removeFormat': 'Clean a style',
      'justifyLeft': 'Set left align',
      'justifyCenter': 'Set center align',
      'justifyRight': 'Set right align',
      'justifyFull': 'Set full align',
      'insertUnorderedList': 'Toggle unordered list',
      'insertOrderedList': 'Toggle ordered list',
      'outdent': 'Outdent on current paragraph',
      'indent': 'Indent on current paragraph',
      'formatPara': 'Change current block\'s format as a paragraph(P tag)',
      'formatH1': 'Change current block\'s format as H1',
      'formatH2': 'Change current block\'s format as H2',
      'formatH3': 'Change current block\'s format as H3',
      'formatH4': 'Change current block\'s format as H4',
      'formatH5': 'Change current block\'s format as H5',
      'formatH6': 'Change current block\'s format as H6',
      'insertHorizontalRule': 'Insert horizontal rule',
      'linkDialog.show': 'Show Link Dialog',
    },
    history: {
      undo: 'Undo',
      redo: 'Redo',
    },
    specialChar: {
      specialChar: 'SPECIAL CHARACTERS',
      select: 'Select Special characters',
    },
    output: {
      noSelection: 'No Selection Made!',
    },
  },
});
