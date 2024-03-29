import $ from 'jquery';
const EDITABLE_PADDING = 24;

export default class Resizebar {
  constructor(context) {
    this.$document = $(document);
    this.$resizebar = context.layoutInfo.resizebar;
    this.$resizer = $(".note-resizebar");
    this.$editable = context.layoutInfo.editable;
    this.$codable = context.layoutInfo.codable;
    this.options = context.options;
  }

  initialize() {
    if (this.options.airMode || this.options.disableResizeEditor) {
      this.destroy();
      return;
    }

    this.$resizebar.on('mousedown touchstart', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const editableTop = this.$editable.offset().top - this.$document.scrollTop();
      const editableCodeTop = this.$codable.offset().top - this.$document.scrollTop();

      const onResizebarMove = (event) => {
        let originalEvent = (event.type == 'mousemove') ? event : event.originalEvent.touches[0];
        let height = originalEvent.clientY - (editableTop + EDITABLE_PADDING);
        let heightCode = originalEvent.clientY - (editableCodeTop + EDITABLE_PADDING);

        height = (this.options.minheight > 0) ? Math.max(height, this.options.minheight) : height;
        height = (this.options.maxHeight > 0) ? Math.min(height, this.options.maxHeight) : height;
        heightCode = (this.options.minheight > 0) ? Math.max(heightCode, this.options.minheight) : heightCode;
        heightCode = (this.options.maxHeight > 0) ? Math.min(heightCode, this.options.maxHeight) : heightCode;


        this.$editable.height(height);
        this.$codable.height(heightCode);
      };

      this.$document.on('mousemove touchmove', onResizebarMove).one('mouseup touchend', () => {
        this.$document.off('mousemove touchmove', onResizebarMove);
      });
    });
  }

  destroy() {
    this.$resizebar.off();
    this.$resizebar.addClass('note-locked');
  }
}
