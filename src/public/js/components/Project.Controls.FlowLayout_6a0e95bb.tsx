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
class FlowLayout_6a0e95bb extends Base {
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
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    TestHelper.identify();
    return pug `
      div(style=Object.assign({'paddingBottom': '15px', 'paddingLeft': '15px', 'paddingRight': '15px'}, this.props.forward && this.props.forward.styles || {}), internal-fsb-class="FlowLayout", className="internal-fsb-element internal-fsb-strict-layout " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="6a0e95bb")
        .col-12.internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px', 'paddingTop': '20px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="bed2d8b2")
          .internal-fsb-element(style={'color': 'rgba(0, 49, 216, 1)', 'fontSize': '24px', 'fontWeight': '700', 'lineHeight': '1em', 'marginBottom': '15px', 'paddingLeft': '0px', 'paddingRight': '0px', 'whiteSpace': 'nowrap'}, internal-fsb-guid="3594c944")
            div
              | SOFTENSTORM FOUNDATION
          .internal-fsb-element(style={'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'flexBasis': '0px', 'flexGrow': '1', 'paddingLeft': '0px', 'paddingRight': '0px', 'textAlign': 'right'}, internal-fsb-guid="9ae7a9e1")
            a.-fsb-self-7e3024a9.internal-fsb-element(href="/", internal-fsb-guid="7e3024a9")
              .internal-fsb-element(internal-fsb-guid="280818b1")
                | Home
            a.-fsb-preset-7e3024a9.internal-fsb-element(style={'FsbInheritedPresets': '7e3024a9'}, href="/livebook-dictionary", internal-fsb-guid="9e4c1b91")
              .internal-fsb-element(internal-fsb-guid="1a9dd50a")
                | LiveBook Dictionary
            a.-fsb-preset-7e3024a9.internal-fsb-element(style={'FsbInheritedPresets': '7e3024a9'}, href="/stackblend-studio-suite", internal-fsb-guid="68812c50")
              .internal-fsb-element(internal-fsb-guid="10a10128")
                | StackBlend Studio
            a.-fsb-preset-7e3024a9.internal-fsb-element(style={'FsbInheritedPresets': '7e3024a9'}, href="/blog/categories/all", internal-fsb-guid="995989e3")
              .internal-fsb-element(internal-fsb-guid="3446e432")
                | Blog
    `
  }
}
DeclarationHelper.declare('Site', 'Controls.FlowLayout_6a0e95bb', FlowLayout_6a0e95bb);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.