import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function App(){
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               Termos de uso e privacidade
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4></h4>
              <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus pulvinar elementum integer enim. Non quam lacus suspendisse faucibus interdum posuere. Aliquam nulla facilisi cras fermentum odio eu feugiat. Proin nibh nisl condimentum id venenatis a condimentum. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Scelerisque felis imperdiet proin fermentum. Fames ac turpis egestas sed tempus urna. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Consectetur adipiscing elit pellentesque habitant morbi. Fermentum dui faucibus in ornare quam viverra orci sagittis. Scelerisque fermentum dui faucibus in. Morbi leo urna molestie at. Quam pellentesque nec nam aliquam sem et. Congue eu consequat ac felis donec. Porttitor eget dolor morbi non arcu. Arcu non sodales neque sodales ut etiam sit amet. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Aliquam purus sit amet luctus venenatis lectus magna.
Cursus eget nunc scelerisque viverra mauris. Nec ullamcorper sit amet risus. Id nibh tortor id aliquet lectus proin nibh. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Interdum varius sit amet mattis vulputate enim nulla. In hac habitasse platea dictumst quisque sagittis purus sit. Volutpat consequat mauris nunc congue. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Eget mauris pharetra et ultrices neque ornare. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Scelerisque fermentum dui faucibus in ornare quam. Eros donec ac odio tempor orci dapibus.
Nibh praesenttristique magna sit amet purus gravida. Tempus imperdiet nulla malesuada pellentesque elit eget. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Facilisi etiam dignissim diam quis. Pellentesque sit amet porttitor eget dolor. Augue lacus viverra vitae congue eu. Convallis tellus id interdum velit laoreet id donec ultrices. Etiam erat velit scelerisque in dictum non consectetur. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Blandit massa enim nec dui nunc mattis enim. Mauris sit amet massa vitae tortor.
Ut diam quam nulla porttitor massa id neque. Adipiscing elit duis tristique sollicitudin nibh sit amet. Fames ac turpis egestas sed tempus. Ultricies mi eget mauris pharetra et. At risus viverra adipiscing at in tellus integer feugiat. Lobortis scelerisque fermentum dui faucibus in. Pellentesque dignissim enim sit amet. Donec et odio pellentesque diam volutpat. Condimentum lacinia quis vel eros donec ac odio tempor. Gravida cum sociis natoque penatibus et magnis dis parturient. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. At augue eget arcu dictum varius duis at consectetur lorem. Semper risus in hendrerit gravida rutrum. Volutpat lacus laoreet non curabitur. In egestas erat imperdiet sed euismod nisi. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Eu turpis egestas pretium aenean. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Interdum varius sit amet mattis vulputate enim nulla.
Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Arcu felis bibendum ut tristique et egestas quis ipsum. Nec ultrices dui sapien eget mi proin sed libero enim. Risus commodo viverra maecenas accumsan lacus vel facilisis. Turpis in eu mi bibendum neque egestas congue quisque egestas. Lacus luctus accumsan tortor posuere. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Bibendum enim facilisis gravida neque. Vulputate sapien nec sagittis aliquam malesuada bibendum. Feugiat nisl pretium fusce id velit ut. Morbi enim nunc faucibus a pellentesque. Pharetra pharetra massa massa ultricies mi quis. Morbi tristique senectus et netus et. Erat velit scelerisque in dictum non. Id interdum velit laoreet id donec ultrices. Venenatis urna cursus eget nunc. Sed velit dignissim sodales ut eu. Nam aliquam sem et tortor consequat id porta nibh. Ut porttitor leo a diam.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    const [modalShow, setModalShow] = React.useState(false);
    
    
    return(<div>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <a onClick={() => setModalShow(true)} className="termos">Termos de uso e privacidade</a>
    </div>)
}

export default App