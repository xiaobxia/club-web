/**
 * Created by xiaobxia on 2017/12/5.
 */
import React, {PureComponent} from 'react';
import Simditor from 'simditor';
import jQuery from 'jquery';
// import '../../../../node_modules/simditor-html/styles/simditor-html.css';
// require( '../../../../node_modules/simditor-html/lib/simditor-html.js');

//PureComponent浅比较
class AppEditor extends PureComponent {
  componentDidMount() {
    this.editor = new Simditor({
      textarea: jQuery(this.textbox),
      toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', 'ol', 'ul', 'blockquote', 'code', 'table', 'link', 'image', 'indent', 'outdent', 'alignment', 'hr'],
      upload: {
        url: '', //文件上传的接口地址
        params: null, //键值对,指定文件上传接口的额外参数,上传的时候随文件一起提交
        fileKey: 'file', //服务器端获取文件数据的参数名
        connectionCount: 3,
        leaveConfirm: '正在上传文件'
      }
    });
    this.editor.on('valuechanged', (e, src) => {
      // todo
    });
  }

  componentWillUnmount() {
    if (this.editor) {
      console.log('destroy');
      this.editor.destroy();
    }
  }


  render() {
    let val = this.props.val;
    return (
      <div>
        <textarea
          className="form-control"
          ref={(div) => {
            this.textbox = div;
          }}
          rows="30"
        >{val}</textarea>
      </div>
    );
  }
}

export default AppEditor;
