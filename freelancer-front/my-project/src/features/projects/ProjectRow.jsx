import React, { useState } from "react";
import Table from "../../ui/Table";
import truncaateText from "../../utils/trncateText";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { TbPencilMinus } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeletOpen, setIsDeletOpen] = useState(false);
  const { isDeleting, removeProject } = useRemoveProject();

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncaateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td> {toPersianNumbersWithComma(project.budget)} </td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]:">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td className="">{project.freelancer?.name || "?"}</td>
      <td>
        {project.status == "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className=" badge badge--danger">بسته</span>
        )}
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              title={`ویرایش ${project.title}`}
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
            >
              this is moadl
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeletOpen(true)}>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              title={`حذف ${project.title}`}
              open={isDeletOpen}
              onClose={() => setIsDeletOpen(false)}
            >
              <ConfirmDelete
                resourseName={project.title}
                onClose={() => setIsDeletOpen(false)}
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => setIsDeletOpen(false),
                  })
                }
                disabled={false}
              />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
