

export  const joditConfig = {
  uploader: {
    url: `${process.env.NEXT_PUBLIC_BASE_API_URL}/uploads`,
    format: 'json',
    prepareData: function (data: any) {
      return data;
    },
    isSuccess: (resp: any) => !resp.error,
    process: (resp: any) => {
      console.log('Upload response:', resp); // Debugging log
      return {
        files: resp.data && resp.data.location ? [resp.data.location] : [],
        path: resp.data && resp.data.location,
        error: resp.error,
        msg: resp.msg,
      };
    },
    defaultHandlerSuccess: function (data: any, resp: any) {
      const files = data.files || [];
      if (files.length) {
        console.log('Inserting image:', files[0]); // Debugging log
        const editorInstance = editor.current?.editor;
        if (editorInstance) {
          editorInstance.selection.insertImage(files[0], null, 250);
        }
      }
    },
  },
  height: 500,
  toolbarAdaptive: false, // Disable adaptive toolbar
  spellcheck: false, // Disable spellcheck if not needed
  disablePlugins: ['speechRecognition'], // Example of disabling specific plugins
};