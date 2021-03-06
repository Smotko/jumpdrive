define(["asteroid", "bgs/background"], function(Asteroid, Background){

    var Background3 = Background.extend({
        initMesh : function(){
            this.geometry = new THREE.SphereGeometry(300, 20, 20);
            this.material = new THREE.MeshLambertMaterial({
                color: 'white' 
            });
            //this.geometry = new THREE.CubeGeometry(2, 2, 2);
            this.mesh = mesh = new THREE.Mesh(this.geometry, this.material);
            mesh.position.z = -900;
            mesh.position.y = 700;
            mesh.position.x = 0;
            this.objects.push(mesh);
            
            var light = new THREE.PointLight(0xffffff, 2, 700);
            light.position.y = 390;
            light.position.z = -250;
            light.position.x = -200;
            this.objects.push(light);
            var geometry, material, as;
//            for(var i = 0; i < 150; i++){
//                geometry = new THREE.SphereGeometry(
//                        Math.ceil(Math.random()*5), 
//                        Math.ceil(Math.random()*2)+2, 
//                        Math.ceil(Math.random()*2)+2);
//                material = new THREE.MeshLambertMaterial({
//                    color: 'white' 
//                });
//                as = new THREE.Mesh(geometry, material);
//                as.position.x = (Math.random() - 0.5) * 300;
//                as.position.y = (Math.random() - 0.5) * 300;
//                as.position.z = -50;
//                this.objects.push(as);
//            }
        }
    });
    return Background3;
});