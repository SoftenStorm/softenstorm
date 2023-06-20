// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Request, Response} from "express";
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow, Input, DatabaseHelper} from '../../../helpers/DatabaseHelper';
import {ProjectConfigurationHelper} from '../../../helpers/ProjectConfigurationHelper';
import {ValidationInfo, ValidationHelper} from '../../../helpers/ValidationHelper';
import {RequestHelper} from '../../../helpers/RequestHelper';
import {RenderHelper} from '../../../helpers/RenderHelper';
import {SchemaHelper, DataTableSchema} from '../../../helpers/SchemaHelper';
import {loc} from '../../../helpers/LocalizationHelper';
import $Base from '../../Base';

// Assign to an another one to override the base class.
// 
let Base: typeof $Base = $Base;

// <---Auto[Import]

// Import additional modules here:
//

// Auto[Declare]--->
/*enum SourceType {
  Relational,
  PrioritizedWorker,
  Document,
  VolatileMemory,
  RESTful,
  Dictionary,
  Collection
}
enum ActionType {
  Insert,
  Update,
  Upsert,
  Delete,
  Retrieve,
  Popup,
  Navigate,
  Test
}*/
// <---Auto[Declare]

// Declare private static variables here:
//

// Auto[Interface]--->
/*interface HierarchicalDataTable {
  source: SourceType;
  group: string;
  rows: HierarchicalDataRow[];
  notification?: string;
}
interface HierarchicalDataRow {
  keys: {[Identifier: string]: any};
  columns: {[Identifier: string]: any};
  relations: {[Identifier: string]: HierarchicalDataTable};
  division?: number[];
}
interface Input {
  target: SourceType;
  group: string;
  name: string;
  value: any;
  guid: string;
  premise: string;
  validation: ValidationInfo;
  division?: number[];
}
interface ValidationInfo {
  name: string;
  required: boolean;
  customMessage: string;
  format?: string;
  regex?: string;
}*/
// <---Auto[Interface]

// Declare or extend interfaces here:
//

// Auto[ClassBegin]--->
class Controller extends Base {
  constructor(request: Request, response: Response, template: string) {
    super(request, response, template);
    try {
      let [action, schema, data] = this.initialize(request);
      this.perform(action, schema, data);
     } catch(error) {
      RenderHelper.error(response, error);
    }
  }
  // <---Auto[ClassBegin]
  // Declare class variables and functions here:
  //
  protected validate(data: Input[]): void {
    // The message of thrown error will be the validation message.
    //
     ValidationHelper.validate(data);
  }
  
  // ---------------------------------------------------------------
  // Metadata (SEO)
  // ---------------------------------------------------------------
  
  protected async accessories(data: Input[]): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        resolve({
          title: null,
          description: null,
          keywords: null,
          language: null,
          contentType: null,
          revisitAfter: null,
          robots: null,
          linkUrl: null,
          imageUrl: null,
          itemType: null,
          contentLocale: null
        });
      } catch(error) {
        reject(error);
      }
    });
  }
  
  // ---------------------------------------------------------------
  // Example Code of Express Parameters
  // ---------------------------------------------------------------
  // 
  // Access path parameters of "/path/:a/:b" using:
  // this.request.params['a'], this.request.params['b']
  // 
  // Access query-string parameters of "/path/a/b?c=123" using:
  // this.request.query['c']
  // 
  // Access session variables "token" using:
  // this.request.session.token
  // 
  // Saving session variables "token" using:
  // this.request.session.token = 'abc';
  // this.request.session.save(() => {
  //   resolve(...);
  // });
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // Traditional HTTP Request Methods
  // ---------------------------------------------------------------
  
  protected async get(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      try {
        const all = (this.request.params.category == 'all') ? await DatabaseHelper.retrieve(RequestHelper.createInputs({
            'blog.active': true
          }), ProjectConfigurationHelper.getDataSchema().tables['blog'],
          this.request.session,   // session variables
          false,                  // real-time updates
          false                   // skip permission settings
        ) : {
          'blog': {
            source: SourceType.Document,
            group: 'blog',
            rows: Array.from((await DatabaseHelper.retrieve(RequestHelper.createInputs({
                'category.path': this.request.params.category,
                'category.blog.id': null,
                'category.blog.active': true
              }), ProjectConfigurationHelper.getDataSchema().tables['category'],
              this.request.session,   // session variables
              false,                  // real-time updates
              false                   // skip permission settings
            ))['category'].rows.map(row => row.relations.blog.rows)).flat(1)
          }
        };
        
        for (const row of all.blog.rows) {
          row.columns.link = '/blog/post/' + row.keys.path;
        }
        
        resolve(all);
      } catch(error) {
        reject(error);
      }
    });
  }
  
  // Auto[MergingBegin]--->  
  protected initialize(request: Request): [ActionType, DataTableSchema, Input[]] {
    let schema: DataTableSchema = RequestHelper.getSchema(this.pageId, request);
    let data: Input[] = [];
    let input: Input = null;
    
    // <---Auto[MergingBegin]
    // Auto[Merging]--->

    // <---Auto[Merging]
    
    // Auto[MergingEnd]--->
    
    let action: ActionType = RequestHelper.getAction(this.pageId, request);
    return [action, schema, data];
  }
  // <---Auto[MergingEnd]
  
  // Auto[ClassEnd]--->
}
// <---Auto[ClassEnd]

// Export variables here:
//
export default Controller;

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.