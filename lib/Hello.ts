module World {

	export class Hello {

		constructor(protected name: string) {}
	
		public sayHello(): void {
			console.log("Hello World: " + this.name);
		}
		
		public static test(parameter: string){
			console.log("test called with: " + parameter);
		}
	}
}