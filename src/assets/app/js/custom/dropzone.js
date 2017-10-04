var DropzoneDemo = function() {
    var e = function() {
		Dropzone.options.mDropzoneThree = {
            paramName: "file",
            maxFiles: 1,
            maxFilesize: 5,
          // acceptedFiles: "image/*,application/pdf,.psd",
            accept: function(e, o) {
                "justinbieber.jpg" == e.name ? o("Naha, you don't.") : o()
            }
        }
    };
    return {
        init: function() {
            e()
        }
    }
}();
DropzoneDemo.init();