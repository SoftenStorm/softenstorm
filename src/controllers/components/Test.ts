import {Request, Response} from "express";
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow, Input, DatabaseHelper} from '../helpers/DatabaseHelper';
import {ProjectConfigurationHelper} from '../helpers/ProjectConfigurationHelper';
import {RequestHelper} from '../helpers/RequestHelper';
import {RenderHelper} from '../helpers/RenderHelper';
import {DataTableSchema} from '../helpers/SchemaHelper';
import {Base} from './Base';

class TestController extends Base {
  constructor(request: Request, response: Response, template: string) {
  	super(request, response, template);
  	try {
	    let [action, schema, data] = this.initialize(request);
	    this.perform(action, schema, data);
   	} catch(error) {
	  	RenderHelper.error(response, error);
	  }
  }
  
  protected validate(data: Input[]): void {
  	void(0);
  }
  
  protected async get(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async post(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async put(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async delete(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async insert(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
      try {
      	let options = RequestHelper.getOptions(this.pageId, this.request);
        resolve(await DatabaseHelper.insert(data, schema, options.crossRelationUpsert, this.request.session, true));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async update(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
    	try {
      	let options = RequestHelper.getOptions(this.pageId, this.request);
        resolve(await DatabaseHelper.update(data, schema, options.crossRelationUpsert, this.request.session, true));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async upsert(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
    	try {
        resolve(await DatabaseHelper.upsert(data, schema, this.request.session, true));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async remove(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
    	try {
        resolve(await DatabaseHelper.delete(data, schema, this.request.session, true));
      } catch(error) {
        reject(error);
      }
    });
  }
 	
  private initialize(request: Request): [ActionType, DataTableSchema, Input[]] {
  	const json: any = request.body;
  	let action: ActionType;
		
		switch (json['action']) {
			case 'insert':
				action = ActionType.Insert;
				break;
			case 'update':
				action = ActionType.Update;
				break;
			case 'upsert':
				action = ActionType.Upsert;
				break;
			case 'delete':
				action = ActionType.Delete;
				break;
			default:
				action = null;
				break;
		}
		
		const schema = ProjectConfigurationHelper.getDataSchema().tables[json['schema']];
		
		if (!action) throw new Error('Invalid Operation');
		if (!schema) throw new Error("The specify premise schema doesn't exist.");
		
		const data = RequestHelper.createInputs(json['fields']);
		
	  return [action, schema, data];
	}
}

export const index = (req: Request, res: Response) => {
  new TestController(req, res, "test");
}