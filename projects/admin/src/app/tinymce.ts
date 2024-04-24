import { environment } from '@env/environment';
import { tinymceDefaultSettings } from 'angular-tinymce';
declare var tinymce;

export const TINY_NOMENUS = Object.assign(tinymceDefaultSettings(), {
  branding: false,
  toolbar: false,
  statusbar: false,
  menubar: false,
  baseURL: '/assets/tinymce',
  tinymceScriptURL: '/assets/tinymce/tinymce.min.js',
  theme_url: '/assets/tinymce/themes/modern/theme.min.js',
  skin_url: '/assets/tinymce/skins/lightgray',
  plugins: 'paste',
  paste_as_text: true,
});

export const TINY_RICHTEXT = Object.assign(tinymceDefaultSettings(), {
  branding: false,
  statusbar: false,
  menubar: false,
  relative_urls: false,
  baseURL: '/assets/tinymce',
  tinymceScriptURL: '/assets/tinymce/tinymce.min.js',
  theme_url: '/assets/tinymce/themes/modern/theme.min.js',
  skin_url: '/assets/tinymce/skins/lightgray',
  plugins: [
    'autoresize',
    'code',
    'image',
    'imagetools',
    'link',
    'media',
    'paste',
  ],
  toolbar:
    // tslint:disable-next-line:max-line-length
    'styleselect | bold italic underline | alignleft aligncenter alignright | bullist numlist | link unlink | image editimage imageoptions media | removeformat code',
  automatic_uploads: true,
  auto_focus: false,
  images_upload_url: `${environment.host}/upload`,
  images_reuse_filename: true,
  images_upload_credentials: true,
  imagetools_cors_hosts: ['img.boxxerworld.com'],
  image_advtab: true,
  file_picker_types: 'image',
  file_picker_callback,
  file_browser_callback_types: 'image',
  images_upload_handler,
  convert_urls: false,
  media_filter_html: false,
  media_url_resolver: (data, resolve) => {
    const isYoutube = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm;
    if (data.url.match(isYoutube)) {
      const embedHtml =
        '<center><div class="embed-container"><iframe width="853" height="480" src="' +
        data.url +
        '?rel=0&showinfo=0" frameborder="0" gesture="media" allowfullscreen></iframe></div></center>';
      resolve({ html: embedHtml });
    } else {
      resolve({ html: '' });
    }
  },
  video_template_callback: (data) => {
    return (
      '<div class="video-wrapper"><video width="' +
      data.width +
      '" height="' +
      data.height +
      '"' +
      (data.poster ? ' controls="controls" poster="' + data.poster + '"' : '') +
      '>\n' +
      '<source src="' +
      data.source1 +
      '"' +
      (data.source1mime ? ' type="' + data.source1mime + '"' : '') +
      ' />\n' +
      (data.source2
        ? '<source src="' +
          data.source2 +
          '"' +
          (data.source2mime ? ' type="' + data.source2mime + '"' : '') +
          ' />\n'
        : '') +
      '</video></div>'
    );
  },
});

export function images_upload_handler(blobInfo, success, failure) {
  let xhr, formData;

  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.open('POST', `${environment.host}/upload`);

  xhr.onload = function() {
    let json;

    if (xhr.status !== 201) {
      failure('HTTP Error: ' + xhr.status);
      return;
    }

    json = JSON.parse(xhr.responseText);
    if (!json) {
      failure('Invalid JSON: ' + xhr.responseText);
      return;
    }
    const location = `https://img.boxxerworld.com/${json.key}?width=868`;

    success(location);
  };

  formData = new FormData();
  formData.append('file', blobInfo.blob(), blobInfo.filename());

  xhr.send(formData);
}

export function file_picker_callback(cb, value, meta) {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.onchange = (e: any) => {
    const file = e.path[0].files[0];
    const reader: any = new FileReader();
    reader.onload = () => {
      const id = 'blobid' + new Date().getTime();
      const blobCache = tinymce.activeEditor.editorUpload.blobCache;
      const base64 = reader.result.split(',')[1];
      const blobInfo = blobCache.create(id, file, base64);
      blobCache.add(blobInfo);

      cb(blobInfo.blobUri(), { title: file.name });
    };
    reader.readAsDataURL(file);
  };
  input.click();
}
