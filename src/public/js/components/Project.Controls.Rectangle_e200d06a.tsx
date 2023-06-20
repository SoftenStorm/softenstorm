// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Project as $Project, DeclarationHelper} from '../helpers/DeclarationHelper';
import {CodeHelper} from '../helpers/CodeHelper';
import {EventHelper} from '../helpers/EventHelper';
import {HTMLHelper} from '../helpers/HTMLHelper';
import {AnimationHelper} from '../helpers/AnimationHelper';
import {TestHelper} from '../helpers/TestHelper';
import {SourceType, HierarchicalDataTable, HierarchicalDataRow} from '../helpers/DataManipulationHelper';
import {loc as $loc} from '../helpers/LocalizationHelper';
import $Base, {IBaseProps, IBaseState, DefaultBaseProps, DefaultBaseState, Button as $Button} from './Base';

// Assign to an another one to override the base class.
// 
let Base: any = $Base;

// <---Auto[Import]

// Import additional modules here:
//

// Auto[Declare]--->

declare let React: any;
declare let ReactDOM: any;
declare let window: any;
declare let DataManipulationHelper: any;
declare let pug: any;

let Button = $Button;
let Project = $Project;
let loc = $loc;

/*enum SourceType {
  Relational,
  PrioritizedWorker,
  Document,
  VolatileMemory,
  RESTful,
  Dictionary,
  Collection
}*/
// <---Auto[Declare]

// Declare private static variables here:
//

// Auto[Interface]--->
/*interface HierarchicalDataTable {
  source: SourceType;
  group: string;
  rows: HierarchicalDataRow[];
}
interface HierarchicalDataRow {
  keys: {[Identifier: string]: any};
  columns: {[Identifier: string]: any};
  relations: {[Identifier: string]: HierarchicalDataTable};
}*/
interface IAutoBaseProps extends IBaseProps {
  forward: {classes: String, styles: any};
}
interface IAutoBaseState extends IBaseState {
}
// <---Auto[Interface]

// Declare or extend interfaces here:
//
interface IProps extends IAutoBaseProps {
  
}
interface IState extends IAutoBaseState { 
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  
});

// Auto[ClassBegin]--->
class Rectangle_e200d06a extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {
    TestHelper.identify();
    function ready(a){"loading"!=document.readyState?a(new Event('ready')):document.addEventListener?document.addEventListener("DOMContentLoaded",a):(document.onreadystatechange=function(e){"complete"==document.readyState&&a(e)})};
        
  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected initialize(): void {
    // This is an example of creating a static collection and use in data binding:
    // 
    /* this.state.data = this.state.data || this.props.data || window.data || {};
    const staticCollection: HierarchicalDataTable = {
      source: SourceType.Collection,
      group: 'collection',
      rows: [{
        keys: {...}
        columns: {...}
        relations: {...}
      },
      ...]
    };
    this.state.data['collection'] = staticCollection; */
    //
    // Don't forget to create the mockup's schemata in Explore / Data.
    // 
  }
  
  protected componentDidMount(): void {
    this.register();
  }
  
  protected componentWillUnmount(): void {
  }
  
  protected componentWillReceiveProps(nextProps: any): void {
    // This is an example of creating a dynamic collection and use in data binding:
    // 
    /* this.state.data = this.state.data || this.props.data || window.data || {};
    const dynamicCollection: HierarchicalDataTable = {
      source: SourceType.Collection,
      group: 'collection',
      rows: nextProps.items.map((item) => {
        return {
          keys: {...}
          columns: {...}
          relations: {...}
        };
      })
    };
    this.state.data['collection'] = dynamicCollection; */
    //
    // Don't forget to create the mockup's schemata in Explore / Data.
    // 
  }
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string, inArray: boolean=false, always: boolean=false): any {
    // Redirect the target by overriding the notation value, for example:
    // 
    // notation = `collection[${notation.split(',')[1]}].collection`;
    //
    
    return super.getDataFromNotation(notation, inArray, always);
  }
  
  // Auto[Merging]--->
  protected onImageClick_b304ee4c(event: Event) {

    // Handle the event of onImageClick (Image 2) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    const target = EventHelper.getCurrentElement(event);
    target.parentNode.nextElementSibling.style.display = 'flex';

  }

  protected onHTMLClick_63125e3d(event: Event) {

    // Handle the event of onHTMLClick (HTML 1) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    const target = EventHelper.getCurrentElement(event);
    target.parentNode.style.display = 'none';
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    TestHelper.identify();
    return pug `
      div(style=Object.assign({'marginTop': '15px', 'paddingLeft': '0px', 'paddingRight': '0px', 'width': '100%'}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="e200d06a")
        .internal-fsb-element(style={'MsOverflowX': 'auto', 'overflowX': 'auto', 'paddingLeft': '0px', 'paddingRight': '0px', 'textAlign': 'center', 'whiteSpace': 'nowrap', 'width': '100%'}, internal-fsb-guid="074a55b9")
          each data, i in this.getDataFromNotation("current.gallery", true, false)
            .-fsb-preset-eb281339.internal-fsb-element(style={'FsbInheritedPresets': 'eb281339'}, key="item_" + (data && data.keys && Object.keys(data.keys).map((key)=>{return key + ":" + data.keys[key];}).join("_") || i), data-fsb-index=i, internal-fsb-guid="53eebdd1")
              .internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="b304ee4c")
                img(style={'cursor': 'pointer', 'display': 'block', 'height': '100%', 'padding': '0px', 'width': '100%'}, onClick=this.onImageClick_b304ee4c.bind(this), src=this.getDataFromNotation("current.gallery[" + i + "].src"))
              .-fsb-preset-8b145a01.internal-fsb-element.internal-fsb-layer-off.internal-fsb-stretch.internal-fsb-strict-layout(style={'FsbInheritedPresets': '8b145a01'}, internal-fsb-class="FlowLayout", internal-fsb-guid="52413801")
                .col-md-4.internal-fsb-element.offset-md-1(style={'paddingLeft': '0px', 'paddingRight': '0px', 'textAlign': 'center', 'width': '100%'}, internal-fsb-guid="5656eadc")
                  .internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="4dc25b5e")
                    img(style={'display': 'inline-block', 'height': '100%', 'maxWidth': '400px', 'padding': '0px', 'width': '100%'}, src=this.getDataFromNotation("current.gallery[" + i + "].src"))
                .-fsb-preset-937ee3cc.col-lg-4.col-md-5.internal-fsb-element.offset-lg-2.offset-md-1(style={'FsbInheritedPresets': '937ee3cc'}, internal-fsb-guid="e74c52c0")
                  each data, j in this.getDataFromNotation("current.gallery[" + i + "].comment", true, false)
                    .-fsb-preset-027229d9.col-12.internal-fsb-element(style={'FsbInheritedPresets': '027229d9'}, key="item_" + (data && data.keys && Object.keys(data.keys).map((key)=>{return key + ":" + data.keys[key];}).join("_") || j), data-fsb-index=j, dangerouslySetInnerHTML={__html: CodeHelper.escape(CodeHelper.toSecuredDataString(data))}, internal-fsb-guid="78bebb3b")
                .internal-fsb-element(style={'cursor': 'pointer', 'position': 'absolute', 'right': '20px', 'top': '20px'}, dangerouslySetInnerHTML={__html: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" fill=\"currentColor\" class=\"bi bi-x-lg\" viewBox=\"0 0 16 16\">\n<path d=\"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z\"/>\n</svg>"}, onClick=this.onHTMLClick_63125e3d.bind(this), internal-fsb-guid="63125e3d")
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.Rectangle_e200d06a', Rectangle_e200d06a);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.